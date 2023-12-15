
export default function Convert(DOM: HTMLDivElement) {

    let group2Users = {
        '00':"renstrio24p",
        '01':"samplejohn",
        '02':"aliceJane1",
    }

    // const convertedObject = Object.values(group2Users)
    // const convertedObjectkeys = Object.keys(group2Users)
    const convertedObjectEntries = Object.entries(group2Users)

  DOM.innerHTML = (`
    <div>
      <h1>${convertedObjectEntries}</h1>
    </div>
  `);

}