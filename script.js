

// Heart Count -----------------------

const heartCount = document.querySelector(".heart-count");

const heartIcons = document.querySelectorAll(".heart-icon");

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let currentValue = parseInt(heartCount.textContent) || 0;
    heartCount.textContent = currentValue + 1;
  });
});


// Help Number and Hisotory -------------------------------------

const coin = document.querySelector('.coin'); 
const historyContainer = document.querySelector('.history-container'); 
const clearHistory = document.querySelector('.clear-history');

let copyCount = 0; 
const copyCountEl = document.querySelector('.copy-count');
const cards = document.querySelectorAll('.parent-div');

cards.forEach(card => {
  const callBtn = card.querySelector('.help-call');
  const copyBtn = card.querySelector('.copy-container');
  const helpText = card.querySelector('.help-text');
  const helpNumber = card.querySelector('.help-number');

  callBtn.addEventListener('click', () => {
    let coins = parseInt(coin.textContent) || 0;
    if (coins < 20) return alert("❌ You don’t have enough coins. It costs 20 coins to make a call.");

    coin.textContent = coins - 20;

    const now = new Date();
    const time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

   
    const template = historyContainer.querySelector('.history-content').cloneNode(true);
    template.querySelector('.service-name').textContent = helpText.textContent;
    template.querySelector('.service-number').textContent = helpNumber.textContent;
    template.querySelector('.call-time').textContent = time;

    historyContainer.appendChild(template);

    alert(`📞 Calling ${helpText.textContent} ${helpNumber.textContent}...`);
  });

  
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(helpNumber.textContent)
      .then(() => {
        copyCount++;
        copyCountEl.textContent = `${copyCount} Copy`;
        alert(`Number has been copied : ${helpNumber.textContent}`);
      })
      .catch(err => console.error('Copy failed: ', err));
  });
});


clearHistory.addEventListener('click', () => {
  const items = historyContainer.querySelectorAll('.history-content');
  items.forEach((item, i) => {
    if (i === 0) {
      item.querySelector('.service-name').textContent = '';
      item.querySelector('.service-number').textContent = '';
      item.querySelector('.call-time').textContent = '';
    } else item.remove();
  });
});
