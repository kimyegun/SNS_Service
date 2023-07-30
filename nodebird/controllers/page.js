exports.renderProfile = (req, res) => {
    res.render('progile', {title:'내 정보 - NodeBird'});
};

exports.renderJoin = (req, res) => {
    res.render('join', {title:'회원 가입 - NodeBird'});
};

exports.renderMain = (req, res, next) => {
    const twits = [];
    res.render('main', {
        title: 'NodeBird',
        twits,
    });
};