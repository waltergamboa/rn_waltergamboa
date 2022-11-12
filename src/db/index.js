import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("jugadores.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS jugadores (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err) => reject(err)
      );
    });
  });
  return promise;
};

export const insertJugador = (title, image, address, coords) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO jugadores (name, image, address, coords) VALUES (?, ?, ?, ?);",
        [title, image, address, coords],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const updateJugador = (id, title, image, address, coords) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE jugadores SET name = ?, image = ?, address = ?, coords = ? WHERE id = ?;",
        [title, image, address, JSON.stringify(coords), id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => reject(err)
      );
    });
  });

  return promise;
};

export const getJugador = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM jugadores;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const deleteJugador = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM jugadores WHERE id = ?;",
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const borrarTabla = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE jugadores;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

// const db = SQLite.openDatabase("places.db");

// export const init = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL);",
//         [],
//         () => resolve(),
//         (_, err) => reject(err)
//       );
//     });
//   });
//   return promise;
// };

// export const insertPlace = (title, image, address, coords) => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "INSERT INTO places (title, image, address, coords) VALUES (?, ?, ?, ?);",
//         [title, image, address, JSON.stringify(coords)],
//         (_, result) => {
//           resolve(result);
//         },
//         (_, err) => reject(err)
//       );
//     });
//   });

//   return promise;
// };

// export const getPlaces = () => {
//   const promise = new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "SELECT * FROM places",
//         [],
//         (_, result) => {
//           resolve(result);
//         },
//         (_, err) => {
//           reject(err);
//         }
//       );
//     });
//   });
//   return promise;
// };
