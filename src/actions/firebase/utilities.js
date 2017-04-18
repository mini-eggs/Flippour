import { Firebase, User } from "./initial";
import { sortBy, take } from "lodash";

function getRef() {
  return Firebase.database().ref();
}

function getKey() {
  return getRef().push().key;
}

function getBaseData() {
  const time = new Date().getTime();
  return {
    user: User,
    time: time,
    timeDesc: 0 - time
  };
}

export function insertData(location, data) {
  // create data
  const updates = {};
  updates[`${location}${getKey()}`] = Object.assign({}, getBaseData(), data);
  return new Promise((resolve, reject) => {
    // push data
    getRef().update(updates, err => {
      (err ? reject : resolve)(err);
    });
  });
}

export function getData(location, count, sortOptions) {
  return new Promise(resolve => {
    const ref = Firebase.database().ref(location);
    let sorted;

    if (sortOptions.user) {
      sorted = ref.orderByChild("user").equalTo(User).limitToLast(count);
    } else {
      sorted = ref;
    }

    sorted.on("value", snap => {
      const data = snap.val();
      if (!data) {
        // no need to reject
        // we just dont have data yet
        resolve([]);
      } else {
        const arr = Object.keys(data);
        let games = arr.map(key => data[key]);
        if (sortOptions.high) {
          games = sortBy(games, ["score"]);
        }
        resolve(take(games.reverse(), 10));
      }
    });
  });
}
