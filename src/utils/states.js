import create from 'zustand';

export const useStore = create(set => ({
  resultMeter: '',
  setResultMeter: inputResultMeter => set({ resultMeter: inputResultMeter }),
  otherGlobalState: 0,
  setOtherGlobalState: () =>
    set(state => ({ otherGlobalState: state.otherGlobalState + 1 })),
}));
