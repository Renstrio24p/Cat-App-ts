import Cart from "../../components/Cart"
// import BookShop from "../../components/convert/BookShop"
// import Convert from "../../components/convert/convert"
// import TypeScript from "../../components/TypeScript"

// import ReelTime from "../../components/ReelTime"

export default function Render(){

  const TSDOM = document.querySelector('#TS') as HTMLDivElement | null

  {TSDOM && Cart(TSDOM)}

}