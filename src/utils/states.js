import create from 'zustand';

export const useStore = create(set => ({
  resultMeter: '',
  setResultMeter: inputResultMeter => set({ resultMeter: inputResultMeter }),
  resultSerialNumber: '',
  setResultSerialNumber: inputSerialNumber =>
    set({ resultSerialNumber: inputSerialNumber }),
  meterType: '',
  setMeterType: inputMeterType => set({ meterType: inputMeterType }),
  logedIn: false,
  setLogedIn: inputLogin => set({ logedIn: inputLogin }),
}));
