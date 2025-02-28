import Image from "next/image";

function GateType() {
  return (
    <section id="brama" className="flex justify-center items-center p-5">
      <div className="flex flex-col items-center justify-center  max-w-screen-lg">
        <h2 className="md:text-4xl text-2xl text-neutral-400 underline decoration-sky-500">
          Jaką bramę garażową wybrać?{" "}
        </h2>
        <p className="p-5">
          Przede wszystkim należy się kierować funkcjonalnością, natomiast
          aspekt wizualny to często drugorzędna kwestia. Firma LIMOSTAL oferuje
          jedno i drugie! Nasze bramy są wygodne w użytkowaniu oraz zachowują
          walory estetyczne przez lata.
        </p>

        {/* BRAMA SEGMENTOWA */}
        <div className="flex gap-5 max-sm:flex-col pt-5">
          <Image
            src="/images/segmentowa.jpg"
            width={500}
            height={500}
            alt="brama-garazowa"
          />
          <div>
            <h3 className="md:text-3xl text-xl"> Brama Segmentowa</h3>
            <p className="text-sm">
              Bramy segmentowe to najpopularniejsze i najbardziej komfortowe
              rozwiązanie do garażu. Otwierane są pionowo, a konstrukcja chowana
              jest pod dachem. Dzięki temu oszczędzają miejsce zarówno w garażu
              jak i przed nim. Brama ta stworzona jest z segmentów, połączonych
              pianką, która chroni przed hałasem oraz przenikaniem powietrza.
              Standardowo brama wyposażona jest w automat.
            </p>
          </div>
        </div>
        {/* BRAMA SEGMENTOWA */}
        {/* BRAMA UCHYLNA */}
        <div className="flex gap-5 max-sm:flex-col md:pt-10 pt-5">
          <Image
            src="/images/uchylna.jpg"
            width={500}
            height={500}
            alt="brama-garazowa"
          />
          <div>
            <h3 className="md:text-3xl text-xl"> Brama Uchylna</h3>
            <p className="text-sm">
              Brama uchylna, otwierana do góry. Zastosowane w mechanizmie bramy
              sprężyny po obu stronach doskonale równoważą ciężar całej
              konstrukcji, co zapewnia łatwe otwieranie i zamykanie bramy.
              Wszystkie oferowane bramy posiadają jeden zamek, który
              współpracuje z systemem ryglowania. Standardowa brama uchylna ma 3
              metry szerokości 2 metry wysokości. Dodatkowo można zastosować
              automatykę bramy.
            </p>
          </div>
        </div>
        {/* BRAMA UCHYLNA */}
        {/* BRAMA DWUSKRZYDLOWA */}
        <div className="flex gap-5 max-sm:flex-col md:pt-10 pt-5">
          <Image
            src="/images/dwuskrzydlowa.jpg"
            width={500}
            height={500}
            alt="brama-garazowa"
          />
          <div>
            <h3 className="md:text-3xl text-xl"> Brama dwuskrzydłowa</h3>
            <p className="text-sm">
            Idealnie sprawdzają się nie tylko do garażów, ale także schowków
            ogrodowych czy wiat śmietnikowych. Bramy dwuskrzydłowe charakteryzują się możliwością
            otwierania na dwie strony, co znacząco zwiększa funkcjonalność i wygodę użytkowania. Dodatkowo,
            są one dostępne zarówno w wersji symetrycznej, jak i niesymetrycznej, co pozwala na łatwe
            dostosowanie do różnorodnych potrzeb i warunków przestrzennych.
            </p>
          </div>
        </div>
        {/* DWUSKRZYDLOWA*/}
        <p>Należy pamiętać,  że brama garażowa może całkowicie zmienić wygląd i funkcjonalność Twojego garażu 😊</p>
      </div>
    </section>
  );
}

export default GateType;
