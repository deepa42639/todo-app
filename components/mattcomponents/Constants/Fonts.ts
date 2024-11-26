import { 
    Inter, Montserrat, Roboto, Lato, Open_Sans, Raleway, Oswald, Poppins, Ubuntu, 
    Merriweather, Nunito, Playfair_Display, Fira_Sans, 
    PT_Serif, Oxygen, Quicksand, Zilla_Slab, Work_Sans, Noto_Sans, Noto_Serif, 
    Cabin, DM_Serif_Display, Exo_2, Francois_One, Galada, Jost, Karla, Lora, 
    Noto_Sans_JP, Overpass, PT_Mono, Rokkitt, Signika, Teko, Titillium_Web, 
    Varela_Round, Yaldevi, Alegreya, Amatic_SC, Anton, Archivo, Barlow, Bebas_Neue, 
    Biryani, Cormorant, Dosis, Euphoria_Script, Gloock, Inconsolata, Julee, 
    Lexend_Deca, Major_Mono_Display, Mukta, Nunito_Sans, Righteous, Rubik, 
    Space_Mono, Trirong 
  } from "next/font/google";
  
  const InterFont = Inter({ subsets: ["latin"], weight: "400" });
  const MontserratFont = Montserrat({ subsets: ["latin"], weight: "400" });
  const RobotoFont = Roboto({ subsets: ["latin"], weight: "300" });
  const LatoFont = Lato({ subsets: ["latin"], weight: "400" });
  const OpenSansFont = Open_Sans({ subsets: ["latin"], weight: "400" });
  const RalewayFont = Raleway({ subsets: ["latin"], weight: "400" });
  const OswaldFont = Oswald({ subsets: ["latin"], weight: "400" });
  const PoppinsFont = Poppins({ subsets: ["latin"], weight: "400" });
  const UbuntuFont = Ubuntu({ subsets: ["latin"], weight: "400" });
  const MerriweatherFont = Merriweather({ subsets: ["latin"], weight: "400" });
 
  const NunitoFont = Nunito({ subsets: ["latin"], weight: "400" });
  const PlayfairDisplayFont = Playfair_Display({ subsets: ["latin"], weight: "400" });
  const FiraSansFont = Fira_Sans({ subsets: ["latin"], weight: "400" });
 
  const PTSerifFont = PT_Serif({ subsets: ["latin"], weight: "400" });
  const OxygenFont = Oxygen({ subsets: ["latin"], weight: "400" });
  const QuicksandFont = Quicksand({ subsets: ["latin"], weight: "400" });
  const ZillaSlabFont = Zilla_Slab({ subsets: ["latin"], weight: "400" });
  const WorkSansFont = Work_Sans({ subsets: ["latin"], weight: "400" });
  const NotoSansFont = Noto_Sans({ subsets: ["latin"], weight: "400" });
  const NotoSerifFont = Noto_Serif({ subsets: ["latin"], weight: "400" });
  const CabinFont = Cabin({ subsets: ["latin"], weight: "400" });
  const DMSerifDisplayFont = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
  const Exo2Font = Exo_2({ subsets: ["latin"], weight: "400" });
  const FrancoisOneFont = Francois_One({ subsets: ["latin"], weight: "400" });
  const GaladaFont = Galada({ subsets: ["latin"], weight: "400" });
  const JostFont = Jost({ subsets: ["latin"], weight: "400" });
  const KarlaFont = Karla({ subsets: ["latin"], weight: "400" });
  const LoraFont = Lora({ subsets: ["latin"], weight: "400" });
 
  const NotoSansJPFont = Noto_Sans_JP({ subsets: ["latin"], weight: "400" });
  const OverpassFont = Overpass({ subsets: ["latin"], weight: "400" });
  const PTMonoFont = PT_Mono({ subsets: ["latin"], weight: "400" });
  const RokkittFont = Rokkitt({ subsets: ["latin"], weight: "400" });
  const SignikaFont = Signika({ subsets: ["latin"], weight: "400" });
  const TekoFont = Teko({ subsets: ["latin"], weight: "400" });
  const TitilliumWebFont = Titillium_Web({ subsets: ["latin"], weight: "400" });
  const VarelaRoundFont = Varela_Round({ subsets: ["latin"], weight: "400" });
  const YaldeviFont = Yaldevi({ subsets: ["latin"], weight: "400" });
  const AlegreyaFont = Alegreya({ subsets: ["latin"], weight: "400" });
  const AmaticSCFont = Amatic_SC({ subsets: ["latin"], weight: "400" });
  const AntonFont = Anton({ subsets: ["latin"], weight: "400" });
  const ArchivoFont = Archivo({ subsets: ["latin"], weight: "400" });
  const BarlowFont = Barlow({ subsets: ["latin"], weight: "400" });
  const BebasNeueFont = Bebas_Neue({ subsets: ["latin"], weight: "400" });
  const BiryaniFont = Biryani({ subsets: ["latin"], weight: "400" });
  const CormorantFont = Cormorant({ subsets: ["latin"], weight: "400" });
  const DosisFont = Dosis({ subsets: ["latin"], weight: "400" });
  const EuphoriaScriptFont = Euphoria_Script({ subsets: ["latin"], weight: "400" });
  const GloockFont = Gloock({ subsets: ["latin"], weight: "400" });
  const InconsolataFont = Inconsolata({ subsets: ["latin"], weight: "400" });
  const JuleeFont = Julee({ subsets: ["latin"], weight: "400" });
  const LexendDecaFont = Lexend_Deca({ subsets: ["latin"], weight: "400" });
  const MajorMonoDisplayFont = Major_Mono_Display({ subsets: ["latin"], weight: "400" });
  const MuktaFont = Mukta({ subsets: ["latin"], weight: "400" });
  const NunitoSansFont = Nunito_Sans({ subsets: ["latin"], weight: "400" });
  const RighteousFont = Righteous({ subsets: ["latin"], weight: "400" });
  const RubikFont = Rubik({ subsets: ["latin"], weight: "400" });
  const SpaceMonoFont = Space_Mono({ subsets: ["latin"], weight: "400" });
  const TrirongFont = Trirong({ subsets: ["latin"], weight: "400" });
  
  export const FontInter = InterFont.className;
  export const FontMontserrat = MontserratFont.className;
  export const FontRoboto = RobotoFont.className;
  export const FontLato = LatoFont.className;
  export const FontOpenSans = OpenSansFont.className;
  export const FontRaleway = RalewayFont.className;
  export const FontOswald = OswaldFont.className;
  export const FontPoppins = PoppinsFont.className;
  export const FontUbuntu = UbuntuFont.className;
  export const FontMerriweather = MerriweatherFont.className;

  export const FontNunito = NunitoFont.className;
  export const FontPlayfairDisplay = PlayfairDisplayFont.className;
  export const FontFiraSans = FiraSansFont.className;

  export const FontPTSerif = PTSerifFont.className;
  export const FontOxygen = OxygenFont.className;
  export const FontQuicksand = QuicksandFont.className;
  export const FontZillaSlab = ZillaSlabFont.className;
  export const FontWorkSans = WorkSansFont.className;
  export const FontNotoSans = NotoSansFont.className;
  export const FontNotoSerif = NotoSerifFont.className;
  export const FontCabin = CabinFont.className;
  export const FontDMSerifDisplay = DMSerifDisplayFont.className;
  export const FontExo2 = Exo2Font.className;
  export const FontFrancoisOne = FrancoisOneFont.className;
  export const FontGalada = GaladaFont.className;
  export const FontJost = JostFont.className;
  export const FontKarla = KarlaFont.className;
  export const FontLora = LoraFont.className;

  export const FontNotoSansJP = NotoSansJPFont.className;
  export const FontOverpass = OverpassFont.className;
  export const FontPTMono = PTMonoFont.className;
  export const FontRokkitt = RokkittFont.className;
  export const FontSignika = SignikaFont.className;
  export const FontTeko = TekoFont.className;
  export const FontTitilliumWeb = TitilliumWebFont.className;
  export const FontVarelaRound = VarelaRoundFont.className;
  export const FontYaldevi = YaldeviFont.className;
  export const FontAlegreya = AlegreyaFont.className;
  export const FontAmaticSC = AmaticSCFont.className;
  export const FontAnton = AntonFont.className;
  export const FontArchivo = ArchivoFont.className;
  export const FontBarlow = BarlowFont.className;
  export const FontBebasNeue = BebasNeueFont.className;
  export const FontBiryani = BiryaniFont.className;
  export const FontCormorant = CormorantFont.className;
  export const FontDosis = DosisFont.className;
  export const FontEuphoriaScript = EuphoriaScriptFont.className;
  export const FontGloock = GloockFont.className;
  export const FontInconsolata = InconsolataFont.className;
  export const FontJulee = JuleeFont.className;
  export const FontLexendDeca = LexendDecaFont.className;
  export const FontMajorMonoDisplay = MajorMonoDisplayFont.className;
  export const FontMukta = MuktaFont.className;
  export const FontNunitoSans = NunitoSansFont.className;
  export const FontRighteous = RighteousFont.className;
  export const FontRubik = RubikFont.className;
  export const FontSpaceMono = SpaceMonoFont.className;
  export const FontTrirong = TrirongFont.className;
  