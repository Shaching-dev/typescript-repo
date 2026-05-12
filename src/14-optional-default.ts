// optional defaults

function getPersonName(name?: string): string {
  const upperREs = name ? name.toUpperCase() : "Guest";
  return `Hello ${upperREs}`;
}

// console.log(getPersonName("Shaching"));
// console.log(getPersonName());

function getName(name: string = "Guest") {
  // set  adefault parameter so that the argument is not passed the default will print
  return `Hello ${name}`;
}

// console.log(getName("Shaching"));
// console.log(getName());

function getId(id?: string) {
  const Id = id ?? "No Id Found";
  return Id;
}

// console.log(getId("e22"));
// console.log(getId());

function connect(host: string, port?: number, secure?: boolean) {
  const p = port ?? 3000;
  const s = secure ?? false;

  return `Your server port is ${p} and hosting in ${host} and the server security  ${s} type`;
}

// console.log(connect("http/localhost", 8000));
