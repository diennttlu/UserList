﻿using Model.Dao;
using Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UserList.Controllers
{
    public class FilterServerController : Controller
    {
        // GET: FilterServer
        public ActionResult Index()
        {
            PositionDao pDao = new PositionDao();
            UserTypeDao utDao = new UserTypeDao();
            ViewBag.Positions = pDao.GetAll();
            ViewBag.UserTypes = utDao.GetAll();

            return View();
        }

        public JsonResult GetUser(
            string fullName = null,
            string userName = null,
            string userCode = null,
            int positionID = 0,
            string team = null,
            int userTypeID = 0,
            bool status = true)
        {
            UserDao dao = new UserDao();
            List<UserModel> listUser = dao.GetListUser(fullName, userName, userCode, positionID, team, userTypeID, status);
            return Json(new { data = listUser }, JsonRequestBehavior.AllowGet);
        }
    }
}