function reply_click(clicked_id)
  {
      // console.log(clicked_id)
 
const project = document.getElementById(`${clicked_id}`);

    const modal = () => `
        <div class="overlay">
          <div class="modal">
            <button class="close-modal">
              Close
            </button> 
            </br>
            <div">${project.innerHTML} 
            </div>
          </div>
          </div>
        </div>
      `;

    function openModal(e) {
      const body = document.querySelector(`body`);
      body.insertAdjacentHTML(`beforeend`, modal());

      const closeButton = document.querySelector(`.close-modal`);
      closeButton.addEventListener(`click`, closeModal);
    }

    // project.addEventListener(`click`, openModal);
    openModal();

    function closeModal(e) {
      // The following two lines remove the event listener
      // To prevent memory leaks in the browser
      const project = document.querySelector(`.close-modal`);
      project.removeEventListener(`click`, closeModal);

      // Place your code below here
      const modal = document.querySelector(`.overlay`);
      modal.remove();
    }
  }  


  return ( <div>
    {isUsernameSaved ? (
    <div>
    <h1>
    {username}: {points}
    </h1>
    <p>
    <button onClick={() => setPoints(points + 1)}>Add Point</button>
    <button onClick={() => setPoints(0)}>Clear Points</button>
    </p>
    <p>
    <button
    onClick={() => {
    setIsUsernameSaved(false);
    }}
    >
    Edit Username
    </button>
    <button
    onClick={() => {
    setUsername(``);
    setPoints(0);
    setIsUsernameSaved(false);
    }}
    >
    Clear Username
    </button>
    </p>
    </div>
    ) : (
    <p>
    <input
    id="username"
    onChange={e => setUsername(e.target.value)}
    placeholder="Username"
    value={username} />
    <button onClick={() => setIsUsernameSaved(true)}></button> Save Username </button>
    </p>
    )}
    </div>
    );
    }