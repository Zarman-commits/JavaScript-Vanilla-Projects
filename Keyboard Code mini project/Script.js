window.addEventListener('keydown', (e) => {
  const firstDiv = document.getElementById('div1');

  firstDiv.innerHTML = `

     

        <div class="key">
            ${e.keyCode}
            <small>
                keyboard Code 
            </small>
        </div>

        <div class="key">
            ${e.code}
            <small>
                keyboard key
            </small>
        </div>

`;
});

// // Method 2

// function showKeyCodes(e) {
//   const firstDiv = document.getElementById('firstdiv');
//   const keyCode = {
//     'e.key': e.key === '' ? 'Space' : e.key,
//     'e.keyCode': e.keyCode,
//     'e.code': e.code,
//   };

//   for (let key in keyCodes) {
//     const div = document.createElement('div');
//     div.className = 'key';
//     const small = document.createElement('small');
//     const keyText = document.createTextNode;
//   }
// }

// window.addEventListener('keydown', showKeyCodes);
