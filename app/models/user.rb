class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length:{ minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    has_many :reservations
    # has_many :restaurants, :through => :reservations
   
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.check_password?(password)
            user 
        else
            nil
        end
    end

    def check_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

end



    