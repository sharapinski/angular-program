const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			count = +query.count||5,
			page = +query.page||1,
			from = (page - 1) * count,
			to = from + count,
			sort = query.sort || 'id',
			queryStr = query.query,
			courses = server.db.getState().courses;
		console.log(sort);
		console.log(queryStr);

		if(queryStr){
			queryStr = queryStr.toLowerCase();
			courses = courses.filter(a => a.title.toLowerCase().indexOf(queryStr) > -1);
		}

		if (courses.length < to) {
			to = courses.length;
		}

		let pages = {
			current: Math.ceil(to / count),
			total: Math.ceil(courses.length / count)
		};

		courses.sort((a, b) => a[sort] > b[sort] ? 1: -1);
		courses = courses.slice(from, to);

		res.json({courses, facets: {pages}});
	});

	router.delete('/courses/:id', (req, res, next) => {
		
	});

	return router;
};
