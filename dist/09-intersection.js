"use strict";
/* intersection type:
creates a new type that combines all the member from the types being intersected
*/
const checkTypes = {
    id: 1200,
    userEmail: "sha@gmail.com",
    userName: "Shaching",
    isActive: true,
};
const ABExplained = {
    a: 123424,
    b: true,
    x: "hello",
};
function saveEntity(entity) {
    console.log(`Saving ${entity.id}, created at ${entity.createdAt}`);
}
saveEntity({
    createdAt: new Date(),
    id: "e2222",
    updatedAt: new Date(),
});
