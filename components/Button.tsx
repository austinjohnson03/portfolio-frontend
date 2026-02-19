interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}

export default function Button({
    children,
    href,
    onClick,
    variant = 'primary',
    className = ''
}: ButtonProps) {
    const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-colors duration-200';

    const variants = {
        primary: 'bg-amber-500 hover:bg-amber-600 text-white',
        secondary: 'bg-zinc-700 hover:bg-zinc-800 text-white',
        outline: 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white'
    }

    const styles = `${baseStyles} ${variants[variant]} ${className}`

    if (href) {
        return (
            <a href={href} className={styles}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={styles}>
            {children}
        </button>
    );
}