const ROLES = ["admin", "user", "viewer"] as const;
type Role = (typeof ROLES)[number];

function getRoles(role: Role) {
  console.log(role);
}

getRoles("viewer");
