

document.getElementById('toast').addEventListener('click', function () {
    if (window.CommunicationWinRT) {
        testToast.toastMessage(document.getElementById('input').value, 0)
    } else {
        alert(document.getElementById('input').value)
    }
    })

if (window.CommunicationWinRT) {
    var testToast = new CommunicationWinRT.CommunicationWinRT();
    var testCamera = new CommunicationWinRT.cameraWinRT();

}
