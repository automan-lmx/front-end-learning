var Permission;
(function (Permission) {
    Permission[Permission["Read"] = 1] = "Read";
    Permission[Permission["Write"] = 2] = "Write";
    Permission[Permission["Create"] = 4] = "Create";
    Permission[Permission["Delete"] = 8] = "Delete";
})(Permission || (Permission = {}));
let p = Permission.Create | Permission.Read | Permission.Delete;
console.log(p);
function hasPermission(target, per) {
    return (target & per) === per;
}
console.log(hasPermission(p, Permission.Read));
p = p ^ Permission.Read;
console.log(hasPermission(p, Permission.Read));
