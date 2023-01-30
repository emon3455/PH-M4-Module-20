function traffic(signal){

    switch(signal){

        case "Red":
            console.log("Stop!!!");
            break;

        case "Yellow":
            console.log("Danger Ahed You Cannot Cross the road");
            break;

        default:
            console.log("You can cross the road");
            break;

    }

}

let light  = "Green";
traffic(light);