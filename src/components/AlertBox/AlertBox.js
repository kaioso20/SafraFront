import Alert from "react-bootstrap/Alert";

function AlertBox(props) {
    return (
        <div>
            <Alert
                {...props}
            >
                {props.label}
            </Alert>
        </div>
    )
}

AlertBox.defaultProps = {
    variant: 'danger'
}

export default AlertBox