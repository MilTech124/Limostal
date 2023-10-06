import React from "react";

function MontageSection() {
  return (
    <section id="transport" className="flex max-sm:flex-col justify-center gap-10 md:py-10">

    {/* LEFT COLUMN */}
      <div className="max-w-xl text-center px-2 ">
        <h2 className="text-4xl underline decoration-sky-500 text-neutral-300 pb-5">
          Darmowy <span className="text-blue-500"> montaż</span>
        </h2>
        <p>
          Nasi montażyści dokonują DARMOWEGO MONTAŻU naszych produktów po
          wskazaniu miejsca przez Klienta. Bez względu na rodzaj garażu, który
          wybrałeś, możesz być pewien, że zostanie on zamontowany precyzyjnie i
          terminowo. Nasz proces montażu uwzględnia nie tylko funkcjonalność,
          ale także estetykę, gwarantując, że Twój garaż będzie prezentować się
          doskonale. Ważne: Montaż odbędzie się jeśli samochód ciężarowy będzie
          w stanie dojechać do wskazanego miejsca.
        </p>
      </div>
    {/* LEFT COLUMN */}

    {/* RIGHT COLUMN */}
    <div className="max-w-xl text-center px-2 ">
        <h2 className="text-4xl underline decoration-sky-500  text-neutral-300 pb-5">
          Transport 
        </h2>
        <p>
          Nasi montażyści dokonują DARMOWEGO MONTAŻU naszych produktów po
          wskazaniu miejsca przez Klienta. Bez względu na rodzaj garażu, który
          wybrałeś, możesz być pewien, że zostanie on zamontowany precyzyjnie i
          terminowo. Nasz proces montażu uwzględnia nie tylko funkcjonalność,
          ale także estetykę, gwarantując, że Twój garaż będzie prezentować się
          doskonale. Ważne: Montaż odbędzie się jeśli samochód ciężarowy będzie
          w stanie dojechać do wskazanego miejsca.
        </p>
      </div>
    {/* RIGHT COLUMN */}     
    </section>
  );
}

export default MontageSection;
