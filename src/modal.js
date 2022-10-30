(() => {
    const refs = {
        modalContainer: document.querySelector(".backdrop"),
        modalContainerOpen: document.querySelectorAll("[modalOpenBtn]"),
        modalContainerClose: document.querySelector("[modalCloseBtn]"),

        modal: document.querySelector(".modal"),
        fSet: document.querySelector(".modal__fieldset"),
        warningMessages: document.querySelectorAll(".modal__warning-message"),
        modalBtnMsg: document.querySelector(".modal__button-warning")
    }


    // "Open modal" buttons
    refs.modalContainerOpen.forEach( btn => {
        btn.addEventListener("click", () => {
            refs.modalContainer.style.transform = "scaleY(1)";
        });
    });

    // "Close modal" button. Yes, there's only one of kind
    refs.modalContainerClose.addEventListener("click", () => {
        refs.modalContainer.style.transform = "scaleY(0)";
    });

    // !!!!! WIP !!!!!
    // Close modal after a successfull submit
    // refs.modal.addEventListener("submit", () => {
    //     refs.modalContainer.style.transform = "scaleY(0)";
    // });


    // Change of modal alarm messages visibility (change of messages, the "invisible" class)  
    // Invalid submit
    refs.modal.addEventListener("invalid", (e) => {
        e.preventDefault;
        msgChanger(refs.warningMessages, "invisible", false);
        
        refs.modalBtnMsg.classList.remove("invisible");
        setTimeout(() => { refs.modalBtnMsg.classList.add("invisible"); }, 2000);
    }, true);

    // The change of messages back after a click on the fieldset inputs
    refs.fSet.addEventListener("click", () => { msgChanger(refs.warningMessages, "invisible", true) });

    // A function that changes messages, if a visibility condition is met
    function msgChanger(msgList, classToToggle, classIsInSelectorReq) {
        if (classIsInSelectorReq === msgList[0].classList.contains(classToToggle)) {
            msgList.forEach( msg =>
                msg.classList.toggle(classToToggle)
            );
        }
    }
})();