
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#task").onkeyup = () => {
        if (document.querySelector("#task").value.length > 0 && document.querySelector("#heading").value.length > 0) {
            document.querySelector("#add").disabled = false;
        }
        else {
            document.querySelector("#add").disabled = true;

        }

    }




    document.querySelector("#heading").onkeyup = () => {
        if (document.querySelector("#task").value.length > 0 && document.querySelector("#heading").value.length > 0) {
            document.querySelector("#add").disabled = false;
        }
        else {
            document.querySelector("#add").disabled = true;

        }

    }



    document.querySelector("#add").onclick = () => {

        const task = document.querySelector("#task").value;
        const li = document.createElement("li");


        const closeButton = document.createElement("button");
        closeButton.setAttribute("class", "closeButton btn");


        const hideButton = document.createElement("button");
        hideButton.setAttribute("class", "hideButton btn");

        const doneButton = document.createElement("button");
        doneButton.setAttribute("class", "doneButton btn");


        const headingPart = document.createElement("div");
        headingPart.setAttribute("class", "heading");



        const textPart = document.createElement("div");
        textPart.setAttribute("class", "textPart");





        headingPart.innerHTML = document.querySelector("#heading").value;
        textPart.innerHTML = task;


        document.querySelector("#tasks").append(li);
        li.append(closeButton);
        li.append(hideButton);
        li.append(doneButton);
        li.append(headingPart);
        li.append(textPart);

        document.querySelector("#task").value = "";
        document.querySelector("#heading").value = "";
        document.querySelector("#add").disabled = true;


        const removeAll = document.querySelector("#remove");
        if (document.querySelectorAll("li").length > 0) {
            removeAll.disabled = false;
        }

        document.querySelector("#remove").onclick = function () {

            let allTasks = document.querySelectorAll("li");
            for (let task of allTasks) {
                task.style.display = "none";
            }
            removeAll.disabled = true;
        }




        closeButton.onclick = function close() {
            this.parentNode.style.display = "none";
        }

        let isDone = false;
        doneButton.onclick = done;

        let hided = false;
        hideButton.onclick = hide;



        function done() {
            const thisTask = this.parentNode;




            if (isDone) {
                isDone = false;
                
                
                
                let id = null;
                let pos = 66;
                clearInterval(id);
                id = setInterval(frame, 1);


                function frame() {
                    if (pos === 150) {

                        clearInterval(id);
                        textPart.style.display = "block";
                        textPart.style.backgroundColor = "#B1B2FF"
                        thisTask.style.backgroundColor = "#B1B2FF";
                        headingPart.style.backgroundColor = "#B1B2FF";
                        thisTask.style.boxShadow = "1px 1px 10px #B1B2FF"

                        doneButton.style.display = "inline";
                        hideButton.removeAttribute("disabled");
                        thisTask.removeAttribute("class", "done");
                        headingPart.innerHTML = headingPart.innerHTML.replace("Done", "");




                    } else {
                        pos += 2;
                        thisTask.style.height = pos + "px";

                    }


                }



            }
            else {

                isDone = true;

                textPart.style.display = "none";
                headingPart.innerHTML = `${headingPart.innerHTML} Done`;
                thisTask.style.backgroundColor = "#00CA4E";
                textPart.style.backgroundColor = "#00CA4E";
                headingPart.style.backgroundColor = "#00CA4E";
                thisTask.style.boxShadow = "1px 1px 10px #00CA4E"

                hideButton.setAttribute("disabled", true);
                thisTask.setAttribute("class", "done");



                let id = null;
                let pos = 130;
                clearInterval(id);
                id = setInterval(frame, 1);
                function frame() {
                    if (pos === 66) {

                        clearInterval(id);
                    } else {
                        pos -= 2;
                        thisTask.style.height = pos + "px";

                    }



                }

            }


        }

        function hide() {
            const thisTask = this.parentNode;

            if (hided) {
                hided = false;
                let id = null;
                let pos = 66;
                clearInterval(id);
                id = setInterval(frame, 1);


                function frame() {
                    if (pos === 150) {

                        clearInterval(id);
                        textPart.style.display = "block";
                        textPart.style.backgroundColor = "#B1B2FF";
                        thisTask.style.backgroundColor = "#B1B2FF";
                        headingPart.style.backgroundColor = "#B1B2FF";
                        doneButton.style.display = "inline";
                        thisTask.removeAttribute("class", "hided");
                        thisTask.style.boxShadow = "1px 1px 10px #B1B2FF";
                        headingPart.innerHTML = headingPart.innerHTML.replace("WAITING", "");



                    } else {
                        pos += 2;
                        thisTask.style.height = pos + "px";

                    }


                }



            }
            else {


                textPart.style.display = "none";
                thisTask.style.backgroundColor = "#FFBD44";
                headingPart.style.backgroundColor = "#FFBD44";
                doneButton.style.display = "none";
                thisTask.style.boxShadow = "1px 1px 10px #FFBD44"
                thisTask.setAttribute("class", "hided");
                headingPart.innerHTML = `${headingPart.innerHTML} WAITING`;

                hided = true;





                let id = null;
                let pos = 130;
                clearInterval(id);
                id = setInterval(frame, 1);

                function frame() {
                    if (pos === 66) {

                        clearInterval(id);
                    } else {
                        pos -= 2;
                        thisTask.style.height = pos + "px";

                    }





                }

            }
        }










    }





})