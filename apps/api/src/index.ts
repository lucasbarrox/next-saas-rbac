import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteAnotherUsers = ability.can('delete', 'User')

const userCannotDeleteAnotherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteAnotherUsers)
console.log(userCannotDeleteAnotherUsers)