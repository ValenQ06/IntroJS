let departamento = prompt(
  "Ingrese unos de los siguientes departamentos: \n-valle del cauca \n-antioquia \n-norte de santander \n-quindio \n-nariño"
);

if (departamento === "valle del cauca") {
  ciudad = prompt(
    "Ingrese una de las siguientes ciudades: \n-cali \n-buga \n-tulua \n-cartago \n-florida"
  );
  switch (ciudad) {
    case "cali":
      alert(
        "Cali es conocida por el baile de la salsa, del que hay muchos clubes en el suburbio de Juanchito. En el barrio más antiguo de Cali"
      );
      break;
    case "buga":
      alert(
        "Buga es conocida por su Basílica del Señor de los Milagros de comienzos del siglo XX, un sitio de peregrinación que alberga una imagen sagrada de Cristo que se cree que hace milagros."
      );
      break;
    case "tulua":
      alert(
        "Tulua es un motor comercial, demográfico, cultural, industrial, financiero y agropecuario del centro del departamento."
      );
      break;
    case "cartago":
      alert(
        "cartago es conocido como La Villa de Robledo y también como La ciudad del Sol más alegre de Colombia"
      );
      break;
    case "florida":
      alert(
        "Florida es un municipio del departamento del Valle del Cauca en Colombia, con su propia administración municipal, debido a que es una entidad territorial que hace parte administrativamente al Departamento del Valle del Cauca"
      );
      break;
    default:
      alert("no ingreso una ciudad valida");
      break;
  }
} else {
  if (departamento === "antioquia") {
    ciudad = prompt(
      "Ingrese una de las siguientes ciudades: \n-medellin \n-apartado \n-bello \n-barbosa \n-turbo"
    );
    switch (ciudad) {
      case "medellin":
        alert(
          "Medellín es la capital de la provincia montañosa de Antioquia en Colombia. Es apodada la Ciudad de la eterna primavera por su clima templado y alberga la famosa Feria de las Flores anual"
        );
        break;
      case "apartado":
        alert(
          "Apartadó es un municipio de Colombia, ubicado en la subregión de Urabá en el departamento de Antioquia, siendo el municipio más poblado de dicha región."
        );
        break;
      case "bello":
        alert(
          "Bello es un municipio colombiano, localizado al norte del Área Metropolitana del Valle de Aburrá: Asimismo, forma parte de la homónima subregión geográfica, en el departamento de Antioquia."
        );
        break;
      case "barbosa":
        alert(
          "El municipio de Barbosa contó con una industria incipiente hasta mediados del siglo XX, época en la cual la industria papelera y textil se instalaron en la localidad. Antes de la llegada de la industria, el distrito vivía de la ganadería y la agricultura."
        );
        break;
      case "turbo":
        alert(
          "Turbo es el municipio más grande de Antioquia y está conformado por 18 corregimientos y 230 veredas, que junto con su casco urbano son habitados por cerca de 160 mil habitantes."
        );
        break;
      default:
        alert("no ingreso una ciudad valida");
        break;
    }
  } else {
    if (departamento === "norte de santander") {
      ciudad = prompt(
        "Ingrese una de las siguientes ciudades: \n-cucuta \n-ocaña \n-arboledas \n-bucaramanga \n-pamplona"
      );
      switch (ciudad) {
        case "cucuta":
          alert(
            "Cúcuta es una ciudad colombiana en la frontera con Venezuela, conocida por su historia militar. El Monumento a la Batalla de Cúcuta marca el punto donde se cree que el líder militar Simón Bolívar reunió a sus tropas en 1813."
          );
          break;
        case "ocaña":
          alert(
            "Ocaña Es la capital de la provincia de Ocaña y su economía está basada en la gastronomía, la agricultura y el turismo"
          );
          break;
        case "arboledas":
          alert(
            "Arboledas es un hermoso municipio de Colombia ubicado en el centro de Norte de Santander. Este fabuloso lugar es conocido en la región como “La Fábrica de agua”, y es esencialmente debido a su topografía montañosa que es una gran fuente de nacientes de agua que abastecen al rio Arboledas, Rio Zulia y Catatumbo."
          );
          break;
        case "bucaramanga":
          alert(
            "Está rodeada por la Cordillera Oriental de los Andes y es conocida por sus numerosos parques, incluido el Parque del Agua, con cascadas y fuentes, y el Parque García Rovira bordeado de palmeras."
          );
          break;
        case "pamplona":
          alert(
            "Es la capital de la Provincia de Pamplona y su economía está basada en la gastronomía, la agricultura, el turismo y la educación."
          );
          break;
        default:
          alert("no ingreso una ciudad valida");
          break;
      }
    } else {
      if (departamento === "quindio") {
        ciudad = prompt(
          "Ingrese una de las siguientes ciudades: \n-armenia \n-salento \n-finlandia \n-quimbaya \n-cordoba"
        );
        switch (ciudad) {
          case "armenia":
            alert(
              "Armenia es la capital del departamento de Quindío, en el oeste de Colombia. El frondoso Parque de la Vida tiene un lago bordeado de árboles y una pista de patinaje sobre ruedas. En el límite noreste de la ciudad, el Museo del Oro de Quimbaya exhibe antiguos artefactos de este material."
            );
            break;
          case "salento":
            alert(
              "Armenia es conocida por sus fincas cafeteras y la vegetación de su entorno. Al este se encuentra el Valle del Cocora, donde las palmas de cera, un símbolo nacional, albergan loros poco comunes."
            );
            break;
          case "finlandia":
            alert(
              "Filandia, Quindío, es un pequeño y auténtico pueblo cafetero que se encuentra muy cerca a Salento. Un lugar con una amplia oferta cultural y natural, que poco a poco se ha ido convirtiendo en el objetivo de viajeros de todo el mundo "
            );
            break;
          case "quimbaya":
            alert(
              "Quimbaya, su nombre de la ciudad deriva de la cultura precolombina de la civilización Quimbaya que habitó la zona."
            );
            break;
          case "cordoba":
            alert(
              "Cordona tiene como principales actividades económicas la agricultura y las artesanías. Se ubica a 27 km de Armenia."
            );
            break;
          default:
            alert("no ingreso una ciudad valida");
            break;
        }
      } else {
        if (departamento === "nariño") {
          ciudad = prompt(
            "Ingrese una de las siguientes ciudades: \n-pasto \n-ipiales \n-tumaco \n-la cruz \n-la florida"
          );
          switch (ciudad) {
            case "pasto":
              alert(
                "Pasto es una ciudad del oeste de Colombia. El Museo del Carnaval alberga figuras gigantes usadas en los desfiles de celebración. El Templo de San Juan Bautista colonial y de influencia morisca se ubica junto a la Plaza Nariño central."
              );
              break;
            case "ipiales":
              alert(
                "Ipiales es conocida por su cercanía con el Santuario Las Lajas, un sitio de peregrinación católico. Su alta iglesia de estilo gótico y su puente con arcos cruzan el río Guáitara en una garganta de laderas empinadas al sureste de la ciudad."
              );
              break;
            case "tumaco":
              alert(
                "Tumaco se sitúa a 300 kilómetros de San Juan de Pasto, la capital del departamento. Tumaco es conocido como la «Perla del Pacífico» de Colombia"
              );
              break;
            case "la cruz":
              alert(
                "La cruz es una de las poblaciones más antiguas de la región como fundación española y la más antigua del actual departamento de Nariño"
              );
              break;
            case "la florida":
              alert(
                "La Florida es un municipio colombiano ubicado en el departamento de Nariño. Su cabecera municipal se sitúa a lo 1º 18' de latitud norte y 77º 24' de longitud al oeste de Greenwich"
              );
              break;
            default:
              alert("no ingreso una ciudad valida");
              break;
          }
        } else {
          alert("favor ingrese solo los departamentes indicados");
        }
      }
    }
  }
}
