import React from 'react';

const Banners = () => {
    return (
        <div className="container-fluid">
            <div className="row gx-3">
                <div className="col-md-4">
                    <img
                        src="https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d0f9158698aa192e8ba5_course-thumb-mt-bw.webp"
                        alt="Banner #1"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src="https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d0e0b586d37d7a9ab834_course-thumb-fitness-bw.webp"
                        alt="Banner #2"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-4">
                    <img
                        src="https://cdn.prod.website-files.com/655f1bf932949f9dd0072eaf/65b0d12db0a52d74129f5d36_course-thumb-mma-bw.webp"
                        alt="Banner #3"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banners;
