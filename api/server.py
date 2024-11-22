from flask import *

# 创建Flask应用实例
app = Flask(__name__)
app.template_folder = '../templates'
app.static_folder = '../static'

# 定义路由和视图函数
@app.route('/')
def menu():
    return send_from_directory('../static/html/', 'menu.html')


if __name__ == '__main__':
    # 启动Flask内置的开发服务器
    app.run(debug=True)
