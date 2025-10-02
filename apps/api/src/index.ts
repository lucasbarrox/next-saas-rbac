import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteAnotherUsers = ability.can('delete', 'User')

const userCannotDeleteAnotherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeleteAnotherUsers)
console.log(userCannotDeleteAnotherUsers)