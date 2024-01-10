export const initialState = {
  loading: false,
  catImage: "",
  error: "",
}
// 3-5 useState için reducer kullanmana gerek yok. ama çok fazla useState olacaksa reducer mantıklı olabilir
// rxreducer hazır snipped
export const reducer = (initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...initialState, loading: true }
    case "SUCCESS":
      return {
        ...initialState,
        catImage: action.payload,
        loading: false,
        error: "",
      }
    case "FAIL":
      return {
        ...initialState,
        catImage: "",
        loading: false,
        error: action.payload,
      }
    default: // burası çok önemli değil. bu action typelardan başka bişey gelirse state ilk haline dön demek
      return initialState
    // default: bu action typelardan başka bişey gelirse hiçbirşey yapma
    //   brake
  }
}

