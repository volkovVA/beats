"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";

gulp.task("video", () => {
    return gulp.src(paths.video.src)
        .pipe(gulp.dest(paths.video.dist));
});