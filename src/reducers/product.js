const initialState = {
  products: [
    {
      id: {
        ios: "extra_2_5_seconds_per_level",
        android: "android.test.purchased"
      },
      color: "red",
      title: "2.5s",
      description: "Gain the ability to utilize 25% more time per level! "
    }
  ]
};

export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
