import errorIcon from '~/assets/img/error.png'
import rejectIcon from '~/assets/img/reject.png'
import unknown from '~/assets/img/unknown.png'


export function getErrorLogIcon(type: string) {
    const errorTypeIcon = {
        'window.error': errorIcon,
        'unhandledrejection': rejectIcon,
    }

    return errorTypeIcon[type as keyof typeof errorTypeIcon] || unknown
}
