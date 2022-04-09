class HomeController {

    static home(req, res){
        res.json({ "Title": "Hello World with routes!" });
    }

    static index(req, res){
        res.json({ "index" : "Hello index" });
    }
}

export default HomeController