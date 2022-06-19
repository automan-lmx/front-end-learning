enum Permission {
    Read = 1, // 2^0 0001
    Write = 2,
    Create = 4,
    Delete = 8
}
//  p:xxx|xxx  = 'hhhh' 这种属于联合类型检查， 如果是下面这种具体取值里的 ｜ & ^ 都是异或运算
let p:Permission = Permission.Create | Permission.Read | Permission.Delete;
console.log(p)
// 1. 如何组合权限 
//使用或运算
//  0001
//  或     // 或运算，不同的就为1
//  0010
//  0011 -- 3 这就是使用或来组合

// 2.如何判断是否含有某个权限
// 使用 且 运算
// 0011
// 且
// 0010 
// 0010   ---  true 组合里含有可读权限

function hasPermission(target:Permission, per:Permission) {
    return (target & per) === per
}
// 判断是否含有读权限
console.log(hasPermission(p, Permission.Read))


// 3.删除某个权限
// 0011
// 异或
// 0010  为了删除读
// 0001
p = p ^ Permission.Read
console.log(hasPermission(p, Permission.Read))
