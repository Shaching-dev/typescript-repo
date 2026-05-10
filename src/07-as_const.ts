const ROLES = ["admin", "user", "opeartor"] as const;

// derive a union from the array
type Role = (typeof ROLES)[number];

function setRoles(r: Role): void {
  console.log(r);
}

setRoles("user");
