enum Role {
  Admin,
  User,
  Guest
}

function getPermissions (role: Role): string[] {
    if(role === Role.Admin){
        return ['create', 'read', 'update', 'delete'];
    } else if (role === Role.User){
        return ['read', 'update'];
    } else if (role === Role.Guest){
        return ['read'];
    } else {
        throw new Error('This role does not exist')
    }   
};

console.log(getPermissions(Role.User));
