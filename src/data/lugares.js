 export const lugares = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          id: 1,
          nombre: "Barbarie",
          añoInicio: 1989,
          añoFin: 1990,
          direccion: "cll 10 # 3-87",
          genero: "rock",
          elegido: true,
          icono: 1,
          //imageSrc: `${ic_graba.src}`,
          iconSize: [50, 40],
        },
        geometry: {
          type: "Point",
          coordinates: [-74.07317335, 4.595622512],
        },
      },
      {
        type: "Feature",
        properties: {
          id: 2,
          nombre: "Barbie",
          añoInicio: 1991,
          añoFin: 1992,
          direccion: "cr 7 # 145-57",
          genero: "rock",
          elegido: false,
          icono: 1,
         // imageSrc: `${ic_graba.src}`,
          iconSize: [50, 40],
        },
        geometry: {
          type: "Point",
          coordinates: [-74.0269, 4.7209],
        },
      },
    ],
  };