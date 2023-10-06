import Image from "next/image";

function Preparation() {
  const items = [
    {
      image: "/images/warto-wiedziec/wylewka_betonowa.webp",
      title: "Wylewka Betonowa",
      content: `Zaleca się jej wykonanie, gdy blaszak ma służyć jako garaż dla samochodu. Powinna zajmować teren o ok. 15 - 30 cm większy od wymiarów każdego z boków garażu. Optymalna głębokość warstwy betonu dla garażu blaszanego powinna wynosić ok. 10-15 cm. `,
    },{
        image:"/images/warto-wiedziec/plyty_btonowe_fundament.webp",
        title:"Bloczki betonowe",
        content:`Jeśli garaż jest rozwiązaniem tymczasowym lub jeśli ma nam służyć jedynie jako schowek dla kosiarki i pomniejszych narzędzi ogrodowych, wówczas wystarczającym podłożem są boczki betonowe rozstawione pod ścianami budynku. Są niedrogie, łatwo dostępne w sprzedaży wielu sklepów i składów budowlanych, a ich montaż jest prosty. Bloczki umieszczamy po obwodzie blaszaka (optymalna ilość to 6 sztuk, niezależnie od wymiarów konstrukcji). Konieczne jest wykopanie na nie niewielkich otworów i staranne wypoziomowanie pozycji, w której mają zostać zainstalowane. Dla zwiększenia stabilności takiego podłoża, możemy wzmocnić bloczki kotwami (najlepiej: 12-stkami).`,
    },{
        image:"/images/warto-wiedziec/plyty_betonowe_podloze.webp",
        title:"Płyty chodnikowe",
        content:`Najprostszym rozwiązaniem jest usadowienie garażu na płytach chodnikowych, ułożonych po obrysie garażu. W tym przypadku, uzyskanie stabilności dla całej konstrukcji nie wymaga wkopywania płyt w ziemię. `
    },{
      image:"/images/warto-wiedziec/pod_garaz.webp",
      title:"Słupy Fundamentowe",
      content:`Rozwiązaniem pośrednim między wykonaniem pełnej wylewki a ustawieniem bloczków betonowych jest zainstalowanie garażu na słupach fundamentowych. Aby je wykopać, należy wywiercić wąskie otwory ziemne w rogach blaszaka – można użyć w tym celu świdra ręcznego. Szalunkiem mogą być drewniane słupy, pręty lub rury PCV.  
      Głębokość fundamentów powinna zależeć od poziomu wód gruntowych. Aby sprawdzić, na jakiej głębokości znajdują się wody głębinowe, należy wstępnie wykopać ok. 30 – centymetrowy dołek i pozostawić na kilka godzin. Jeśli po odczekaniu okaże się, że w środku jest sucho, wówczas należy stopniowo pogłębiać otwór sprawdzając stopniowo, W bardziej zaawansowanej formie, niektórzy decydują się na wykonanie fundamentów zlokalizowanych na pełnym obwodzie garażu.`
    }
  ];

  return (
    <section
      id="przygotowanie-podloza"
      className="md:py-10 py-5  bg-sky-500 flex flex-col items-center justify-center"
    >
      <h2 className="mdtext-4xl text-2xl underline"> Przygotowanie podłoża</h2>
      <h3 className="text-xl text-white">Należy po stronie klienta</h3>
      <p className="text-white max-w-screen-lg py-5">
        Teren pod garaż musi być wyrównany i wypoziomowany. Preferowana jest
        wylewka o powiększonych wymiarach o ok 20 cm. Możemy zamontować na
        kostce brukowej ale mocowanie jest wykonywane na odpowiedzialność
        klienta, kostka nie jest fundamentem dlatego może "pracować" w wyniku
        czego bramy mogą po czasie się rozregulować i nie jest to objęte
        gwarancją. Więcej na temat przygotowania podłoża udzielimy
        telefonicznie.
      </p>

      <div>
        <div className="flex flex-col gap-10 md:pt-10 text-white">
          {items.map((item, index) => (
            <div className="flex max-w-screen-lg max-sm:items-center max-sm:p-2 max-sm:flex-col md:gap-10">
              <Image src={item.image} width={300} height={300} alt={item.title}/>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="text-sm">{item.content}</p>
              </div>
            </div>
            )
            )}
        </div>
      </div>
    </section>
  );
}

export default Preparation;
