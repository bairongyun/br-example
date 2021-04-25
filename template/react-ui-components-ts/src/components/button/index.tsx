import React from 'react';
import classNames from 'classnames';

const prefixCls = 'rs-btn';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	type?: 'light' | 'primary' | 'ghost' | 'default';
	htmlType?: 'button' | 'submit' | 'reset';
	size?: 'small' | 'middle' | 'large';
	className?: string;
	block?: boolean;
	disabled?: boolean;
	loading?: boolean;
	loadingText?: string;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
	type,
	htmlType,
	size,
	block,
	disabled,
	loading,
	children,
	loadingText,
	className,
	onClick,
	...otherProps
}) => {
	const handeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!loading) {
			onClick?.(e);
		}
	};

	const buttonCls = classNames(
		prefixCls,
		`${prefixCls}-${type}`,
		{
			[`${prefixCls}-${size}`]: size,
			[`${prefixCls}-block`]: block,
			[`${prefixCls}-loading`]: loading,
		},
		className
	);
	const iconNode = loading ? <span className={`${prefixCls}-icon`} /> : null;

	return (
		<button
			// eslint-disable-next-line react/button-has-type
			type={htmlType}
			className={buttonCls}
			disabled={disabled || loading}
			onClick={handeClick}
			{...otherProps}
		>
			{iconNode}
			<span>{loading ? loadingText : children}</span>
		</button>
	);
};

Button.displayName = 'Button';

Button.defaultProps = {
	type: 'default',
	htmlType: 'button',
	size: 'large',
	block: false,
	disabled: false,
	loading: false,
	loadingText: '提交中',
};
export default Button;
