
var db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);



function Deck(opts) {
    var self = this;
    if (opts['warband']) {
        self.warband = opts['warband'];
    } else {
        self.warband = "Steelheart's Champions";
    }

    if (opts['name']) {
        self.name = opts['name'];
    } else {
        self.name = "Unnamed Deck";
    }

    if (opts['notes']) {
        self.notes = opts['notes'];
    } else {
        self.notes = "";
    }

    if (opts['cards']) {
        self.cards = opts['cards'];
    } else {
        self.cards = [];
    }
}


DeckBuilderViewModel = function () {


    self = this;

    self.loggedIn = ko.observable(-1); //Neither true nor false show log in options won't be shown until login state verified


    self.selectedWarband = ko.observable(exportObj.warbands()[0]);



    self.selectWarband = function (warband) {
        self.selectedWarband(warband)
    }

    // Fighter Functionality
    self.selectedFighters = ko.computed(function () {
        if (self.selectedWarband() == null) {
            return [];
        } else {
            return exportObj.fighters().filter(function (fighter) {
                return fighter.warband === self.selectedWarband().name;
            });
        }
    });


    //     self.deckList = ko.observable([]); // All the current decks (one per warband)
    //     exportObj.warbands().forEach(warband => { // Initialise blank decks for each warband
    //         self.deckList()[warband.name] = new Deck({ "warband": warband.name });
    //     });
    //     self.selectedDeck = ko.observable(self.deckList()["Steelheart's Champions"]);

    //     self.loaded = ko.observableArray();

    //     self.selectedWarband.subscribe(function (newValue) {
    //         self.selectedDeck(self.deckList()[newValue.name]);
    //     });





    //     self.saveButton = function () {

    //         db.collection("desk-test").add({
    //             user: firebase.auth().currentUser.uid,
    //             warband: self.selectedDeck().warband,
    //             name: self.selectedDeck().name,
    //             deck: JSON.stringify(self.selectedDeck())
    //         })
    //             .then(function (docRef) {
    //                 console.log("Document written with ID: ", docRef.id);
    //             })
    //             .catch(function (error) {
    //                 // console.error("Error adding document: ", error);
    //             });


    //     }



    //     self.doStuff = function () {

    //         db.collection("desk-test").where("user", "==", firebase.auth().currentUser.uid)
    //             .get()
    //             .then(function (querySnapshot) {

    //                 test = []
    //                 querySnapshot.forEach(function (doc) {
    //                     test.push(doc.data());
    //                 });
    //                 self.loaded(test);
    //             })
    //             .catch(function (error) {
    //                 console.log("Error getting documents: ", error);
    //             });
    //     }


    //     self.people = ko.observableArray([
    //         { firstName: 'Bert', lastName: 'Bertington' },
    //         { firstName: 'Charles', lastName: 'Charlesforth' },
    //         { firstName: 'Denise', lastName: 'Dentiste' }
    //     ]);


    //     self.loaded.subscribe(function (newValue) {
    //         console.log("Hello");
    //     });

    //     self.currentWarband = ko.observable() // W;


    self.signIn = function (oAuthProvider) {
        if (oAuthProvider == "Google") {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        } else if (oAuthProvider == "Twitter") {
            var provider = new firebase.auth.TwitterAuthProvider();
            firebase.auth().signInWithPopup(provider);
        } else if (oAuthProvider == "Facebook") {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider);
        }
    }

    self.signOut = function () {
        // Sign out of Firebase.
        firebase.auth().signOut();
    }

    self.initFirebaseAuth = function () {
        // Listen to auth state changes.
        firebase.auth().onAuthStateChanged(self.authStateObserver);
    }

    self.authStateObserver = function (user) {

        if (user) { // User is signed in!
            self.loggedIn(true);
        } else { // User is signed out!
            self.loggedIn(false);
        }
    }


}


dbvm = new DeckBuilderViewModel();
dbvm.initFirebaseAuth();
ko.applyBindings(dbvm);
