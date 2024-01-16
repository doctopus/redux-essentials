const getUsers = ({ base }) => base.users;
const getUsersLoading = ({ base }) => base.isLoading;
const getTheme = ({ base }) => base.settings.theme;


export {
    getTheme,
    getUsers,
    getUsersLoading
}