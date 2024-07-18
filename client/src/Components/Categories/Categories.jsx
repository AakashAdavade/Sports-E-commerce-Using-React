import React from 'react'
import "./Categories.scss"
import{Link} from "react-router-dom"

const Categories = () => {
  return (
   <div className="categories">
    <div className="col">
        <div className="row">
            <img src="https://logo.com/image-cdn/images/kts928pd/production/b321cba0b9f5ebf6ed10f37daf65c1fe26fd50c5-731x731.png?w=640&q=72" alt="" />
            <button>
                <Link className="link" to="/Products/6">Hockey</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://img.freepik.com/premium-vector/volleyball-logo-design-with-jumping-person-icon_396343-240.jpg?w=740" alt="" />
            <button>
                <Link className="link" to="/Products/1">VolleyBall</Link>
            </button>
        </div>
    </div>
    <div className="col">
        <div className="row">
        <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX31271639.jpg" alt="" />
            <button>
                <Link className="link" to="/Products/2">Cricket</Link>
            </button>
        </div>
    </div>
    <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://img.freepik.com/free-vector/football-logo-background_1195-244.jpg?w=740&t=st=1691739961~exp=1691740561~hmac=773b37e0f5bf5cf9696c665da6297c8f6f240acbd4a8478299de18733e1cce84" alt="" />
    
            <button>
                <Link className="link" to="/Products/4">FootBall</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://img.freepik.com/premium-vector/badminton-logo-design-sports-logo_331749-131.jpg?w=740" alt="" />
            <button>
                <Link className="link" to="/Products/3">Badminton</Link>
            </button>
                </div>
            </div>
        </div>
        <div className="row">
            <img src="https://images.unsplash.com/photo-1628867578021-c2eaad2ce46c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            <button>
                <Link className="link" to="/Products/5">InDoorGames</Link>
            </button>
        </div>
    </div>
   </div>
  )
}

export default Categories
