const StatusDisplay = ({status}) => {
    const getColor = (status) => {
        let color
        switch (status) {
            case 'done':
                color = 'rgb(4,255,4)'
                break
            case 'wip':
                color = 'rgb(186,5,5)'
                break
            case 'hold':
                color = 'rgb(186,32,201)'
                break
            default:
                color = 'rgb(18,5,40)'
        }
        return color
    }

    return (
        <div
            className="status-display"
             style={{backgroundColor :getColor(status)}}
        >
            {status}
        </div>
    )
}


export default StatusDisplay