export default function PrintCard() {
  const Print = () => {
    //console.log('print');
    let printContents = document.getElementById("center-container").innerHTML;
    let `originalContents` = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <button type="button" onClick={Print}>
      Print div
    </button>
  );
}
