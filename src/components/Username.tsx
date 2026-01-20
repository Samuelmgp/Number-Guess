export default function Username({setUsername} : {setUsername?: (username: string) => void}) {

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    console.log("Username submitted:", username);

    setUsername?.(username);
    window.alert(`Welcome, ${username}!`);
  }

  return (
    <div className="card flex flex-col items-center gap-4 p-6 bg-gray-700 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required/>
      </form>
    </div>
  )
}