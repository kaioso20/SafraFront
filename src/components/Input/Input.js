export default function Input(props) {
    return (
        <div className='mt10 mb10'>
            <div className='row text-center'>
                <div className='col-sm-3'>
                    {props.label}
                </div>
                <div className='col-sm-9'>
                    <input
                        {...props}
                    />
                </div>
            </div>
        </div>
    )
}