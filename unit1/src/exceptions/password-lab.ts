
import { input, print } from '../lib/stdio'

/*
 * Password minimum criteria:
 *   - Password must have 6 to 15 chars
 *   - Password cannot have empty spaces
 *
 * Password stroness criterias:
 *   1. At least 1 upper letter
 *   2. At least 1 lower letter
 *   3. At least 1 numeric digit
 *   4. Ar least 1 of following special chars: "@#$%/*~:,="
 *
 * - Weak passwords has 0, 1 or 2 of criterias above
 * - Medium passwords has 3 of criterias above
 * - Strong passwords has all 4 of criterias above
 */
function evaluatePassword(password: string): string {
    const passwordMinLength = 6
    const passwordMaxLength = 15

    if (password.length === 0) {
        throw new Error('Password cannot be empty')
    }
    if (password.length < passwordMinLength || password.length > passwordMaxLength) {
        throw new Error(`Password must have ${passwordMinLength} to ${passwordMaxLength} characters long`)
    }
    if (password.includes(' ')) {
        throw new Error('Password cannot contains empty space')
    }

    let criteriaCount = 0
    if (hasUpperLetter(password)) {
        criteriaCount++
    }
    if (hasLowerLetter(password)) {
        criteriaCount++
    }
    if (hasNumericDigit(password)) {
        criteriaCount++
    }
    if (hasSpecialChar(password)) {
        criteriaCount++
    }
    if (criteriaCount === 4) {
        return 'strong'
    } else if (criteriaCount === 3) {
        return 'medium'
    }
    return 'weak'
}

function hasUpperLetter(password: string): boolean {
    const firstUpperLetterCode = 65
    const lastUpperLetterCode = 90

    for (let index = 0; index < password.length; index++) {
        const code = password.charCodeAt(index)
        if (code >= firstUpperLetterCode && code <= lastUpperLetterCode) {
            return true
        }
    }
    return false
}

function hasLowerLetter(password: string): boolean {
    const firstLowerLetterCode = 97
    const lastLowerLetterCode = 122

    for (let index = 0; index < password.length; index++) {
        const code = password.charCodeAt(index)
        if (code >= firstLowerLetterCode && code <= lastLowerLetterCode) {
            return true
        }
    }
    return false
}

function hasNumericDigit(password: string): boolean {
    const firstNumericDigitCode = 48
    const lastNumericDigitCode = 57

    for (let index = 0; index < password.length; index++) {
        const code = password.charCodeAt(index)
        if (code >= firstNumericDigitCode && code <= lastNumericDigitCode) {
            return true
        }
    }
    return false
}

function hasSpecialChar(password: string): boolean {
    const specialChars = '@#$%/*~:,='

    for (let index = 0; index < password.length; index++) {
        if (specialChars.includes(password[index]!)) {
            return true
        }
    }
    return false
}

function main() {

    try {
        const password = input('Senha   : ')
        const strongness = evaluatePassword(password)
        console.log(`Robustez: ${strongness}`)
    } catch {
        console.log('Erro avaliando a senha.')
    }
}

main()
