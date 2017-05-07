// @flow

type IdType = {
  ios: string,
  android: string
};

type ProductType = {
  id: IdType,
  image: any,
  storageKey: string,
  color: string,
  title: string,
  subtitle: string,
  description: string,
  type: string
};

type StateType = {
  products: Array<ProductType>
};

type ActionType = {
  type: string
};

const initialState: StateType = {
  products: [
    {
      id: {
        ios: "extra_2_5_seconds_per_level",
        android: "extra_2_5_seconds_per_level"
      },
      image: require("../products/clock.png"),
      storageKey: "extra_2_5_seconds_per_level",
      color: "red",
      title: "2.5s",
      subtitle: "Need more time?",
      description: "Purchase and receive an extra 2.5 seconds to play each level!",
      type: "ADD_2_5_TO_INITIAL_GAME_TIM"
    }
  ]
};

export function ProductReducer(
  state: StateType = initialState,
  action: ActionType
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
