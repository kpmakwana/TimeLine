import React, { Component } from 'react'

export default class TimeLineItem extends Component {
    getWrapperClass = (props) =>{
        if(this.props.progress==='done')
            return 'timeline-wrapper'
        if(this.props.progress==='active')
            return 'active-timeline-wrapper'
        if(this.props.progress==='pending')
            return 'pending-timeline-wrapper'

    }
    getTimelineItemClass = (props) =>{
        if(this.props.progress==='done')
            return 'timeline-item'
        if(this.props.progress==='active')
            return 'active-timeline-item'
        if(this.props.progress==='pending')
            return 'pending-timeline-item'


    }
    getDateClass = (props) =>{
        if(this.props.progress==='pending')
        return 'pending-timeline-date';
        else{
            return 'timeline-date';
        }
    }
    getStatusClass = (props) =>{
        if(this.props.progress==='pending')
            return 'pending-timeline-staus';
        else{
            return 'timeline-staus';
        }
    }
    getDetailsClass = (props) =>{
        if(this.props.progress==='pending')
            return 'pending-timeline-details';
        else{
            return 'timeline-details';
        }
    }
    render() {
        return (
            <div className={this.getWrapperClass()} >
            <div className= {this.getTimelineItemClass()} >
            <div className={this.getDateClass()}>
                {this.props.actionDate}
            </div>
            <div className={this.getStatusClass()}>
                {this.props.status}
            </div>
            <div className={this.getDetailsClass()} >
                {this.props.details}
            </div>
            </div>
            </div>
        )
    }
}
