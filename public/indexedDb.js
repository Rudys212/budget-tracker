const request = indexedDB.open("budget", 1);

let db;

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore("budgetStore", { autoIncrement: true });
};

r;
function checkingDb() {
  const transaction = db.transaction(["budgetStore"], "readwrite");
  const store = transaction.objectStore("budgetStore");
  const request = store.getAll();

  request.onsuccess = function (e) {
    db = e.request.result;

    request.onerror = function (e) {
      console.log("There was an error");
    };

    db.onerror = function (e) {
      console.log("error");
    };
    if (method === "put") {
      store.put(object);
    } else if (method === "get") {
      const all = store.getAll();
      all.onsuccess = function () {
        resolve(all.result);
      };
    } else if (method === "delete") {
      store.delete(object._id);
    }
    transaction.oncomplete = function () {
      db.close();
    };
  };
}
