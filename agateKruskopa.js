const countersF = document.querySelectorAll('.counterFast');
const speedF = 205;

countersF.forEach(counterF => {
    const updateCount = () => {
        const targetF = +counterF.getAttribute('data-target');
        const countF = +counterF.innerText;

        const incF = targetF / speedF;

        if (countF < targetF) {
            counterF.innerText = Math.ceil(countF + 1);
            setTimeout(updateCount, 1);
        } else {
            countF.innerText = target;
        }

        console.log(incF);
    }

        updateCount();
    });

    const counters = document.querySelectorAll('.counterSlow');
    const speed = 2005;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            const inc = target / speed;
    
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                count.innerText = target;
            }
    
            console.log(inc);
        }
    
            updateCount();
        });

    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function openEdu(evt, eduName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(eduName).style.display = "block";
  evt.currentTarget.className += " active";
}
